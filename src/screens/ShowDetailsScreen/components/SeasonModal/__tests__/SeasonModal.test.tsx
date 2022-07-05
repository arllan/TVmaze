import {render, act, fireEvent} from '@testing-library/react-native';
import React, {createRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  test('show all season options', async () => {
    const modalizeRef = createRef<Modalize>();
    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        selectedSeason="1"
        seasons={['1', '2', '3']}
        onSelectSeason={season => console.log(season)}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i, {exact: false}).length).toBe(3);
  });
  test('call onSelectSeason with correct season when press season', async () => {
    const onSelectSeasonMock = jest.fn();

    const modalizeRef = createRef<Modalize>();
    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        selectedSeason="1"
        seasons={['1', '2', '3']}
        onSelectSeason={onSelectSeasonMock}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season3Element = getByText(/3/);

    fireEvent.press(season3Element);

    expect(onSelectSeasonMock).toBeCalledWith('3');
  });
});
