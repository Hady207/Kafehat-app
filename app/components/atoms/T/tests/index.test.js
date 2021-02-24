import React from 'react';
import renderer from 'react-test-renderer';
import { useTranslation } from 'react-i18next';
import T from '../index';

it('renders correctly across screens', () => {
  jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  }));
  const tree = renderer.create(<T />).toJSON();
  expect(tree).toMatchSnapshot();
});
