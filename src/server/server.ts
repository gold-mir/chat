import * as express from 'express';
import app from './app';

const server = app.listen(3000, (): void => {
  console.log('started app on port 3000')
})