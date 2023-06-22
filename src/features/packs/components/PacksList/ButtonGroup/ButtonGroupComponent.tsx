import React from "react";
import { SuperButton } from "../../../../../common/components/SuperButton/SuperButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector } from "react-redux";
import { activeShowPacksButton } from "../../../packs.selector";
import { packsActions } from "../../../packs.slice";
import { useAppDispatch } from "../../../../../common/hooks";
import { profileSelect } from "../../../../auth/auth.selectors";

export const ButtonGroupComponent = () => {
  const activeButton = useSelector(activeShowPacksButton);
  const profile = useSelector(profileSelect);
  const dispatch = useAppDispatch();

  const onClickMyCardsHandler = () => {
    dispatch(
      packsActions.fetchCardPacks({
        user_id: profile?._id,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          packsActions.changeActiveShowPacksButton({
            activeButton: "My Cards",
          })
        );
      })
      .catch(() => console.log());
  };
  const onClickAllCardsHandler = () => {
    dispatch(packsActions.fetchCardPacks({ page: 1 }))
      .unwrap()
      .then(() => {
        dispatch(
          packsActions.changeActiveShowPacksButton({
            activeButton: "All Cards",
          })
        );
      })
      .catch();
  };
  return (
    <ButtonGroup>
      <SuperButton
        title={"My Cards"}
        isRectangular
        color={activeButton === "My Cards" ? "primary" : "secondary"}
        onClick={onClickMyCardsHandler}
      />
      <SuperButton
        title={"All Cards"}
        isRectangular
        color={activeButton === "All Cards" ? "primary" : "secondary"}
        onClick={onClickAllCardsHandler}
      />
    </ButtonGroup>
  );
};
