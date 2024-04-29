export const bucketAddress =
  "https://firebasestorage.googleapis.com/v0/b/motionbit-dangdangview.appspot.com/o";

export function calculateDday(targetDate: string) {
  var today = new Date();
  today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간을 00:00:00으로 설정
  var target = new Date(targetDate);
  target.setHours(0, 0, 0, 0); // 대상 날짜의 시간을 00:00:00으로 설정

  var difference = target.valueOf() - today.valueOf();
  var daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24)); // 일 단위로 차이 계산

  return daysDifference;
}

export const campains = [
  {
    doc_id: "p0o9i8u7",
    name: "[체험단]펫루션 유산균 영양제, 강아지 체험단 모집",
    product:
      "팔라티노스,이소말트,무수결정포도당 등등 불필요한 당대체재 NO ZERO슈가\n1일 300억 고함량 유산균\n국내산 단호박을 사용해 기호성 만랩",
    targetCnt: 10,
    imageUrl: bucketAddress + "/demo%2Fdemo2.png?alt=media",
    images: [
      bucketAddress + "/demo%2Fdemo2.png?alt=media",
      bucketAddress + "/demo%2Fdemo3.png?alt=media",
      bucketAddress + "/demo%2Fdemo4.png?alt=media",
    ],
    expireDate: "2024-04-20",
    type: "배송",
    views: 200,
    startDate: "2024-04-15",
    endDate: "2024-04-21",
    openDate: "2024-04-22",
    reviewStart: "2024-04-23",
    reviewEnd: "2024-05-07",
    mission_description: `○업체 인스타계정 태그필수:
@meditamin_kr

○인스타 리뷰어 필수가이드
대장건강 유산균 찾으세요?
비피더스균은 확인해보셨나요?
-메디타민은 인체유래 비피더스(HRB)3종 유산균 2종을 사용합니다.
인체유래 비피더스균은 인체에서 유래한 균입니다.

-보장균수를 40억 CFU에서 100억 CFU으로 대폭 늘렸다는 점을 피드에 녹여주세요
-공인시험기관 내산성 테스트를 완료한, 위에서는 녹지 않고 장에서만 녹는 장용캡슐을 사용했기 때문에
비피더스균을 효과적으로 살려서 장까지 보낼 수 있습니다.

- 제조와 유통단계에서도 균의 사멸을 방지하고자 [제조 보관 유통] 전 과정을 냉장 관리하는 콜드체인시스템을 도입했고
살아있는 균을 받아보실 수 있다는 점을 피드에 녹여주세요.`,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Campain = ElementType<typeof campains>;
