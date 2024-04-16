import { Button, HStack, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function AddressInput(props) {
  const [address, setAddress] = useState({
    address: props.address ? props.address : null,
    zonecode: props.zonecode ? props.zonecode : null,
  });

  useEffect(() => {
    setAddress({
      address: props.address ? props.address : null,
      zonecode: props.zonecode ? props.zonecode : null,
    });
  }, [props]);

  const openKakaoPostPopup = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        //data는 사용자가 선택한 주소 정보를 담고 있는 객체이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.
        setAddress(data);
        props.setValue(data.address);
      },
    }).open();
  };
  return (
    <Stack w={"100%"}>
      <HStack w={"100%"}>
        <Input
          placeholder="우편번호"
          value={address?.zonecode}
          defaultValue={address?.zonecode}
        />
        <Button onClick={openKakaoPostPopup} w={"100px"}>
          검색
        </Button>
      </HStack>
      <Input placeholder="도로명주소" value={address?.address} />
      <HStack>
        <Input placeholder="상세주소" />
      </HStack>
    </Stack>
  );
}
