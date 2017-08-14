import update from 'immutability-helper';

update.extend('$setRequestSuccess', (payload, original) => update(original, {
  data: { $set: payload.user },
  isSuccess: { $set: true },
  isError: { $set: false },
  errors: { $set: [] },
}));

update.extend('$setRequestFailed', (payload, original) => update(original, {
  data: { $set: [] },
  isSuccess: { $set: false },
  error: { $set: payload.data },
  isError: { $set: true },
}));
