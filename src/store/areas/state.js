import Layout from '@/common/model/Layout';

const config = ['header', {type: 'content', amount: 3}, 'footer'];

export const state = {
  ...new Layout(config),
};
