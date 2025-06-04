import { defineEnvSchema } from 'typed-env-safe';


const Env = defineEnvSchema({
  OPENAI_API_KEY: {
    type: 'string',
    required: true,
  },
});

export default Env;