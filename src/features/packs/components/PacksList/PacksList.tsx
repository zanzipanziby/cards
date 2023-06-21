import React, { useEffect } from "react";

import { SuperInput } from "../../../../common/components/SuperInput/SuperInput";
import SuperTitle from "../../../../common/components/SuperTitle/SuperTitle";
import { SuperButton } from "../../../../common/components/SuperButton/SuperButton";
import { DescriptionComponent } from "../../../../common/components/DescriptionComponent/DescriptionComponent";
import Box from "@mui/material/Box";
import { ButtonGroupComponent } from "./ButtonGroup/ButtonGroupComponent";
import style from "./PacksList.module.css";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TabelCardPacks } from "./TabelCardPacks/TabelCardPacks";
import { SliderContainer } from "./SliderContainer/SliderContainer";
import { packsActions } from "../../packs.slice";
import { useAppDispatch } from "../../../../common/hooks";
import { PaginationComponent } from "../../../../common/components/Pagination/PaginationComponent";
import { useSelector } from "react-redux";
import { getPacksSelect } from "../../packs.selector";

export const PacksList = () => {
  const dispatch = useAppDispatch();
  const packs = useSelector(getPacksSelect);
  //todo реализовать отоброжение страницы в адресной строке
  useEffect(() => {
    dispatch(packsActions.fetchCardPacks({}));
  }, []);

  const fetchCardPacksForPage = (page: number) => {
    dispatch(packsActions.fetchCardPacks({ page }));
  };

  const inputProps = {
    startAdornment: (
      <InputAdornment position={"start"}>
        <SearchIcon />
      </InputAdornment>
    ),
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={style.container} sx={{ alignItems: "center" }}>
        <SuperTitle title={"Packs list"} style={{ fontSize: "2em" }} />
        <SuperButton title={"Add New Packs"} />
      </Box>
      <Box
        className={style.container}
        sx={{ alignItems: "end", flexWrap: "wrap" }}
      >
        <Box className={style.container}>
          <SuperInput
            label={"Input search"}
            variant={"outlined"}
            sx={{ width: "50ch" }}
            InputProps={inputProps}
            placeholder={"Enter pack name"}
            size={"medium"}
          />
        </Box>
        <Box>
          <DescriptionComponent title={"Show packs cards"} />
          <ButtonGroupComponent />
        </Box>
        <Box>
          <DescriptionComponent title={"Number of cards"} />
          <SliderContainer />
        </Box>
        <Box>
          <SuperButton
            title={"Clear All Filters"}
            isRectangular
            color={"secondary"}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <TabelCardPacks packs={packs} />
      </Box>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <PaginationComponent
          callback={fetchCardPacksForPage}
          count={packs?.cardPacksTotalCount ? packs?.cardPacksTotalCount : 10}
        />
      </Box>
    </Box>
  );
};
