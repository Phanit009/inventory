// apps/api/migrations/20260321-01-add-index-and-threshold-backfill.js
module.exports = {
  async up(db) {
    await db.collection('products').createIndex({ name: 1 }, { name: 'idx_products_name' });
    await db.collection('products').createIndex({ category: 1 }, { name: 'idx_products_category' });
    await db.collection('products').createIndex({ warehouse: 1 }, { name: 'idx_products_warehouse' });
    await db.collection('products').createIndex({ quantity: 1 }, { name: 'idx_products_quantity' });

    await db.collection('products').updateMany(
      { threshold: { $exists: false } },
      { $set: { threshold: 0 } }
    );
  },
  async down(db) {
    await db.collection('products').dropIndex('idx_products_name').catch(()=>{});
    await db.collection('products').dropIndex('idx_products_category').catch(()=>{});
    await db.collection('products').dropIndex('idx_products_warehouse').catch(()=>{});
    await db.collection('products').dropIndex('idx_products_quantity').catch(()=>{});
    // Data rollback intentionally omitted
  }
};
