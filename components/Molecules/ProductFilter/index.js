import React from "react";
import { useState } from "react/cjs/react.development";
import classes from "./filter.module.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { Box, Checkbox, Divider, Flex, Text } from "native-base";
function FilterPopup(props) {
  return props.trigger ? (
    <div className={classes.popup}>
      <div className={classes.popupinner} style={{ opacity: "1" }}>
        <a onClick={() => props.setTrigger(false)} className={classes.closebtn}>
          <i className="fas fa-times"></i>
        </a>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

let data = [
  {
    name: "CATEGORY",
    filter: ["Running", "Casuals", "Slipper", "Sneakers"],
  },
  {
    name: "GENDER",
  },
  {
    name: "SHOE TYPE",
  },
  {
    name: "BRAND",
  },
  {
    name: "DISCOUNT RANGE",
  },
  {
    name: "PRICE",
  },
  {
    name: "SIZE",
  },
];
const FilterItem = ({ name, data }) => {
  const [groupValues, setGroupValues] = React.useState([]);
  const [expand, setExpand] = useState(false);
  return (
    <div>
      {" "}
      <Box>
        <Flex pb="8px" pt="8px" direction="row" justifyContent="space-between">
          <Text fontSize="12px" lineHeight="16px" color="black">
            {name}{" "}
          </Text>
          <Box
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand && data ? (
              <Text
                style={{ cursor: "pointer" }}
                fontSize="20px"
                lineHeight="16px"
                color="black"
              >
                -
              </Text>
            ) : (
              <Text
                style={{ cursor: "pointer" }}
                fontSize="20px"
                lineHeight="16px"
                color="black"
              >
                +
              </Text>
            )}
          </Box>
        </Flex>
        {data && expand ? (
          <Box>
            <Checkbox.Group
              style={{ color: "black" }}
              color="black"
              accessibilityLabel="choose values"
            >
              {data.map((item) => {
                return (
                  <Checkbox bg="white" value={item} my={2}>
                    <Text style={{ color: "black" }}>{item}</Text>
                  </Checkbox>
                );
              })}
            </Checkbox.Group>
            ;
          </Box>
        ) : (
          ""
        )}
        <Divider style={{ border: " 1px solid #C1C3C4" }} />
      </Box>
    </div>
  );
};
const Filter = () => {
  const [trigger, settrigger] = useState(false);

  function setFilter() {
    settrigger(!trigger);
  }

  return (
    <div style={{ left: "40%" }}>
      {" "}
      <button
        style={{
          opacity: 1,
          backgroundColor: "#D31424",
          width: "149px",
          height: "48px",

          borderRadius: 50,
          border: "0px",
          color: "white",
          display: trigger ? "none" : "block",
        }}
        onClick={() => {
          setFilter();
        }}
      >
        <Flex
          direction="row"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Text>Filter</Text>
          <Box w="10" h="10">
            <RiArrowDropUpLine size="xs" />
          </Box>
        </Flex>
      </button>
      <FilterPopup trigger={trigger} setTrigger={setFilter}>
        <div className={classes.modalcontainer}>
          {data.map((item) => {
            return (
              <FilterItem
                key={item.name}
                name={item.name}
                data={item.filter ? item.filter : ""}
              />
            );
          })}
        </div>
        <button
          style={{
            position: "absolute",
            marginTop: 60,
            marginLeft: 40,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            opacity: 1,
            backgroundColor: "#D31424",
            width: "149px",
            height: "48px",

            borderRadius: 50,
            border: "0px",
            color: "white",
          }}
          onClick={() => {
            setFilter();
          }}
        >
          <Flex
            direction="row"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Text>Filter</Text>
            <Box w="10" h="10">
              <RiArrowDropDownLine size="xs" />
            </Box>
          </Flex>
        </button>
      </FilterPopup>
    </div>
  );
};

export default Filter;
