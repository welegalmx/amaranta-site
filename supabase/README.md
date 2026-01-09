# Scripts de Base de Datos Supabase

## Crear tabla de contactos

Para crear la tabla `contact_messages` que recibe los mensajes del formulario de contacto:

1. Ve a tu proyecto en Supabase: https://jbzmkcwhobhkljiydieh.supabase.co
2. Abre el **SQL Editor**
3. Abre el archivo `create_contact_table.sql` en este directorio
4. Copia todo el contenido del archivo
5. Pégalo en el SQL Editor de Supabase
6. Ejecuta el script (botón "Run")

### Campos de la tabla

- `id` - UUID único generado automáticamente
- `name` - Nombre (requerido)
- `email` - Email (requerido)
- `preferred_date` - Fecha preferida para cita (opcional)
- `preferred_time` - Hora preferida para cita (opcional)
- `message` - Mensaje (requerido, máximo 2000 caracteres)
- `created_at` - Fecha de creación automática
- `updated_at` - Fecha de actualización automática

### Seguridad (RLS)

- Los usuarios anónimos pueden **insertar** mensajes (enviar el formulario)
- Solo usuarios autenticados pueden **leer** los mensajes
- Ajusta las políticas según tus necesidades de acceso

