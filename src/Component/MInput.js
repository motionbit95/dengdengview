import { Button, HStack, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

export function AddressInput(props) {
  const { street, zonecode, address } = props;
  const streetRef = useRef();
  const zonecodeRef = useRef();
  // const [address, setAddress] = useState({
  //   street: props.street ? props.street : null,
  //   zonecode: props.zonecode ? props.zonecode : null,
  //   address: props.address ? props.address : null,
  // });

  // useEffect(() => {
  //   setAddress({
  //     street: props.street ? props.street : null,
  //     zonecode: props.zonecode ? props.zonecode : null,
  //     address: props.address ? props.address : null,
  //   });
  // }, [props]);

  const openKakaoPostPopup = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        //data는 사용자가 선택한 주소 정보를 담고 있는 객체이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.
        streetRef.current.value = data.address;
        zonecodeRef.current.value = data.zonecode;

        props.onChange({
          zonecode: data.zonecode,
          street: data.address,
        });
      },
    }).open();
  };
  return (
    <Stack w={"100%"}>
      <HStack w={"100%"}>
        <Input
          fontSize={{ base: "sm", md: "md" }}
          size={props.size ? props.size : "md"}
          name="zonecode"
          placeholder="우편번호"
          value={zonecode}
          defaultValue={zonecode}
          onChange={(e) => {
            props.onChange(e);
          }}
          ref={zonecodeRef}
        />
        <Button
          onClick={openKakaoPostPopup}
          w={"100px"}
          size={props.size ? props.size : "md"}
        >
          검색
        </Button>
      </HStack>
      <Input
        fontSize={{ base: "sm", md: "md" }}
        size={props.size ? props.size : "md"}
        name="street"
        placeholder="도로명주소"
        value={street}
        defaultValue={street}
        onChange={(e) => {
          props.onChange(e);
        }}
        ref={streetRef}
      />
      <HStack>
        <Input
          fontSize={{ base: "sm", md: "md" }}
          size={props.size ? props.size : "md"}
          name="address"
          placeholder="상세주소"
          value={address}
          defaultValue={address}
          onChange={(e) => {
            props.onChange({
              zonecode: zonecodeRef.current.value,
              street: streetRef.current.value,
              address: e.target.value,
            });
          }}
        />
      </HStack>
    </Stack>
  );
}
