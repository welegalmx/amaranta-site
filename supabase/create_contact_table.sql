-- Tabla para recibir mensajes del formulario de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_date DATE,
  preferred_time TIME,
  message TEXT NOT NULL CHECK (char_length(message) <= 2000),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Índice para búsquedas por email
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Índice para ordenar por fecha de creación
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON contact_messages;
CREATE TRIGGER update_contact_messages_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Habilitar Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Política: Permitir inserción de mensajes desde cualquier usuario anónimo
CREATE POLICY "Allow anonymous inserts"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Política: Solo usuarios autenticados pueden leer los mensajes
-- (Ajusta esto según tus necesidades de acceso)
CREATE POLICY "Allow authenticated reads"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Comentarios en la tabla y columnas
COMMENT ON TABLE contact_messages IS 'Mensajes recibidos del formulario de contacto';
COMMENT ON COLUMN contact_messages.name IS 'Nombre de la persona que envía el mensaje';
COMMENT ON COLUMN contact_messages.email IS 'Email de contacto';
COMMENT ON COLUMN contact_messages.preferred_date IS 'Fecha preferida para cita (opcional)';
COMMENT ON COLUMN contact_messages.preferred_time IS 'Hora preferida para cita (opcional)';
COMMENT ON COLUMN contact_messages.message IS 'Mensaje del contacto (máximo 2000 caracteres)';

