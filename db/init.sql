CREATE TABLE IF NOT EXISTS eventos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha DATETIME NOT NULL
);

INSERT INTO eventos (titulo, descripcion, fecha) VALUES
('Taller de Cerámica Triana', 'Taller artesanal tradicional', '2026-10-15 10:00:00'),
('Ruta Nocturna Barrio Santa Cruz', 'Visita guiada de leyendas', '2026-10-16 21:00:00');