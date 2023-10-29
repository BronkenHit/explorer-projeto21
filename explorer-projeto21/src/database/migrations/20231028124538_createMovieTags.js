/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => knex.schema.createTable("movie_tags", table => {
    table.increments("id");
    table.integer("note_id");
    table.integer("user_id");
    table.text("name");
    table.foreign("note_id").references("id").inTable("movie_notes").onDelete("CASCADE");
    table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema.dropTable("movie_tags");
