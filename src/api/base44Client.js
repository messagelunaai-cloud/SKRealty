// Simple stub for base44 client so the UI works without external services.
export const base44 = {
  entities: {
    ContactInquiry: {
      async create(payload) {
        console.log('ContactInquiry.create called with:', payload);
        // simulate async call
        return Promise.resolve({ ok: true });
      },
    },
  },
  integrations: {
    Core: {
      async SendEmail(payload) {
        console.log('Core.SendEmail called with:', payload);
        return Promise.resolve({ ok: true });
      },
    },
  },
};