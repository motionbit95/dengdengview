import React from "react";
import { Text, Container } from "@chakra-ui/react";
import { PageHeader1 } from "../Application/PageHeader/PageHeader1";

function Terms(props) {
  return (
    <Container maxW={"container.md"} py={{ base: "6", md: "12" }}>
      <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight={"bold"}>
        댕댕뷰 이용약관
      </Text>
      <Text whiteSpace={"pre-line"} {...props}>
        {`
제1조 (목적)

이 약관은 댕댕뷰(이하 “회사”라 한다)가 운영하는 댕댕(‘댕댕뷰.com’ 이하 “사이트”라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이트와 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.

​

​

제2조 (정의)

① “사이트”란 회사가 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이트를 운영하는 사업자의 의미로도 사용합니다.

​

② “회원”이란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 고객을 말합니다.

​

③ “아이디(ID)”란 서비스 이용을 위하여 회원이 선정하고 회사가 이를 식별하기 위해 승인하는 문자와 숫자의 조합을 말합니다.

​

④ “비밀번호”란 회원의 정보보호와 안전한 서비스를 이용하기 위해 회원이 선정한 문자와 숫자 등의 조합을 말합니다.

​

⑤ “광고주”란 제품, 서비스, 콘텐츠 등의 홍보와 같은 사이트에서 제공하는 서비스를 이용하기 위해 가입한 회원을 말합니다.

​

⑥ “체험단”이란 광고주의 제품, 서비스. 콘텐츠 등을 체험하는 대가로 체험 후기 등의 콘텐츠를 제공하는 회원을 말합니다.

​

⑦ “콘텐츠”란 광고주 제품의 홍보 및 판매를 목적으로 광고주가 제공하거나 회사에서 제작한 문장, 이미지, 동영상 등과 회원이 광고주의 제품, 서비스, 매장, 콘텐츠를 체험하고 댕댕뷰 및 외부 사이트에 게시하는 문장, 이미지, 동영상 등을 말합니다.

​

⑧ “캠페인”이란 광고주가 제품, 서비스, 매장, 콘텐츠 등을 홍보하기 위해 필수정보(이미지, 제목, 구매채널, 가이드 라인, 미션, 캠페인 일정, 체험단 모집방법과 모집수 등), 추가정보(혜택, 주의사항 등)를 입력한 게시글을 말합니다.

​

⑨ “미션”이란 회원이 포인트를 받기 위해 수행해야 하는 인증 행위를 말합니다. 캠페인 신청 시 “미션수행카드”에 회원이 수행해야 하는 미션이 제시됩니다.

​

⑩ “적립 예정 포인트”란 캠페인 참여 및 미션 완료를 통해 포인트가 지급되었으나 14일이 지나지 않은 포인트를 말합니다.

​

⑪ “출금 가능 포인트”란 캠페인 참여 및 미션 완료를 통해 적립된 적립 예정 포인트 중 14일이 지나 출금이 가능한 포인트를 말합니다..

​

​

제3조 (약관 등의 명시와 설명 및 개정)

① 회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 회원가입 절차와 사이트의 초기 서비스 화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.

​

② 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.

​

③ 사이트가 약관을 개정할 경우에는 적용일자 및 개정 사유를 명시하여 현행약관과 함께 사이트에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.

​

④ 회원이 명시적으로 개정약관의 적용에 대해 적용일자까지 거부의 의사표시를 하지 아니한 경우 회원은 개정약관에 동의한 것으로 봅니다.

​

⑤ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.

​

​

제4조 (서비스의 제공 및 변경)

① 회사는 다음과 같은 업무를 수행합니다.

1. 캠페인 제공, 체험단 리스트 제공, 체험단과 광고주의 연결

​

2. 광고주의 제품, 서비스 등에 대한 마케팅 솔루션 상담 및 제공

​

3. 기타 회사가 정하는 업무

​

② 회사는 서비스를 일정 범위로 분할하여 각 범위별로 이용 가능한 시간을 별도로 지정할 수 있습니다. 다만, 이 경우에는 그 내용을 사전에 공지함을 원칙으로 합니다.

​

③ 회사는 이름, 전화번호 등 사이트에서 요구하는 부가적인 정보를 입력하지 않은 회원에 한하여 서비스의 이용을 제한할 수 있습니다. 다만 이 경우에는 회원에게 그 내용을 알려줘야 합니다.

​

④ 회사는 이용 감소로 인한 원활한 서비스 제공의 곤란 및 수익성 악화, 기술 진보에 따른 차세대 서비스로의 전환 필요성, 서비스 제공과 관련한 회사 정책의 변경 등 회사의 제반 사정 또는 법률상의 장애, 기타 타당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 이용자의 동의를 얻어 제공하고 있는 전부 또는 일부 서비스를 변경 또는 중단, 종료할 수 있습니다.

​

⑤ 회사는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요로 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에 특별한 규정이 없는 한 회원에게 별도의 보상을 하지 않습니다.

​

⑥ 회사는 컴퓨터 등 정보통신설비의 보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 회원에게 통지한 후 서비스의 제공을 일시적으로 중단할 수 있습니다. 다만 회사가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.

​

⑦ 회사는 제6항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 이를 고지했거나 고의 또는 과실이 없이 중단되었을 경우에는 그러하지 아니합니다.

​

​

제5조 (서비스의 저작권)

① 회사가 회원에게 제공하는 각종 서비스에 대한 저작권 및 지적재산권을 포함한 일체의 권리는 회사에 귀속됩니다.

​

​

제6조 (회원가입)

① 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.

​

② 회원가입 시 신청 양식에서 요구한 정보를 작성하고 '서비스 이용약관'과 '개인정보처리방침'에 동의하는 것은 이 약관 및 '개인정보처리방침'의 내용을 숙지하고, 회사의 각종 서비스 정책과 공지사항을 준수하는 것에 대해 동의하는 것으로 봅니다.

​

③ 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.

1. 가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우. 다만 회원 자격을 상실한 후 회사의 회원 재가입 승낙을 얻은 경우를 예외로 한다.

​

2. 등록 내용에 허위, 기재누락, 오기가 있는 경우

​

3. 기타 회원으로 등록하는 것이 사이트의 기술상 현저히 지장이 있다고 판단되는 경우

​

④ 회원가입계약의 성립 시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.

​

⑤ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 회사에 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.

​

​

제7조 (회원 탈퇴 및 자격 상실 등)

① 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.

​

② 회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.

1. 가입 신청 시에 허위 내용을 등록한 경우

​

2. 다른 사람의 사이트 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우

​

3. 사이트를 이용하여 법령 또는 이 약관이 금지하거나 미풍양속에 반하는 행위를 하는 경우

​

4. 10조 각호를 위반하는 등 회사방침을 위반할 경우

​

③ 회사가 회원 자격을 제한․정지 시킨 후, 동일한 행위가 1회 이상 반복되거나 15일 이내에 그 사유가 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.

​

④ 회사가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 15일 이상의 기간을 정하여 소명할 기회를 부여합니다.

​

​

제8조 (회원에 대한 통지)

① 회사가 회원에 대한 통지를 하는 경우, 회원이 회사와 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.

​

② 회사는 불특정다수 회원에 대한 통지의 경우 1주일 이상 사이트 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.

​

​

제9조 (회원의 아이디, 비밀번호, 닉네임의 관리에 대한 의무)

① 회원의 아이디와 비밀번호에 관한 관리책임은 회원에게 있으며, 이를 제3자가 이용하도록 하여서는 안됩니다.

​

② 회원은 아이디 및 비밀번호가 도용되거나 제3자가 사용하고 있음을 인지한 경우 즉시 회사에 통지하고 안내에 따라야합니다. 그 사실을 회사에 통지하지 않거나, 통지 후에도 회사의 안내를 따르지 않아 생기는 불이익에 대해서 회사는 책임을 지지 않습니다.

​

③ 회사는 회원의 아이디나 닉네임이 아래 각 호에 해당하는 경우 회원의 아이디 또는 닉네임의 사용을 제한 또는 변경할 수 있습니다.

1. 개인정보 유출이 우려되는 경우

​

2. 타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우

​

3. 회사 및 사이트의 운영자로 오인할 우려가 있는 경우

​

4. 기타 합리적인 사유가 있는 경우

​

​

제10조 (회원의 의무)

① 회원은 아래 각 호에 해당하는 행위를 하여서는 안됩니다.

1. 회원정보에 허위 내용을 등록하는 행위

​

2. 회사가 게시한 정보의 변경3. 다른 회원의 개인정보 및 계정정보를 수집하는 행위

​

4. 회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해5. 회사 및 기타 제3자의 명예를 훼손하거나 업무를 방해하는 행위6. 회사의 운영자, 직원, 기타 제3자의 정보를 도용하거나 사칭하는 행위7. 공공질서 또는 미풍양속에 위배되는 정보를 유포하는 행위8. 회사의 동의 없이 영리를 목적으로 서비스를 이용하는 행위9. 회사의 동의 없이 회원의 이용 권한을 타인에게 양도, 증여하거나, 담보로 제공하는 행위10. 기타 불법적이거나 거래 관념상 부당한 행위

​

② 회원은 관계법, 이 약관의 규정, 운영정책, 사이트의 공지사항 등을 준수하여야하며, 회사의 기타 업무에 방해되는 행위를 하여서는 안됩니다.

​

​

제11조 (회사의 의무)

① 회사는 관련 법과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하기 위해 최선을 다합니다.

​

② 회사는 「정보통신망법」 등 관계 법령이 정하는 바에 따라 회원의 개인정보 보호를 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련 법 및 회사의 개인정보처리방침이 적용됩니다

​

③ 회사는 서비스 이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여아합니다. 회원이 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 이메일 등을 통하여 회원에게 처리 과정 및 결과를 전달합니다.

​

④ 회사는 안정적인 서비스의 제공을 위하여, 설비에 장애가 생기거나 손상된 때에는 부득이한 사유가 없는 한 지체 없이 이를 수리 또는 복구합니다.

​

​

제12조 (정보의 제공 및 광고의 게재)

① 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 서비스 내 공지사항, 서비스 화면, 서비스 메시지, 이메일 등의 방법으로 회원에게 제공할 수 있습니다. 다만, 회원은 관련법에 따른 거래 관련 정보 및 고객 문의 등에 대한 답변 등을 제외하고는 언제든지 위 정보제공에 대해서 수신 거절을 할 수 있습니다.

​

② 회사는 서비스의 운영과 관련하여 서비스 화면, 서비스 메시지, 홈페이지 등에 광고를 게재할 수 있습니다.

​

​

제13조 (캠페인의 관리)

① 캠페인을 신청한 체험단은 댕댕뷰 에서 등록한 자신의 계정으로 캠페인에 명시된 기간과 내용에 따라 체험 후기 및 기타 미션을 완료하여야 합니다.

​

② 위 제1항에 따라 업로드한 콘텐츠는 업로드한 시점부터 전체 공개로 유지하여야 합니다. 단, 광고주의 요청에 따라 유지 기간은 변경될 수 있습니다.

​

③ 위 제1항에 따라 콘텐츠를 업로드한 채널이 인스타그램일 경우 업로드한 뒤 서비스의 기능을 통해 링크를 넣어 업로드한 콘텐츠를 등록해야 합니다.

​

④ 위 제1항에 따라 콘텐츠를 업로드한 채널이 블로그일 경우 스폰서 배너를 콘텐츠에 포함해 콘텐츠가 캠페인에 등록되도록 해야 하며, 포함하는 방법은 캠페인에 명시된 내용에 따라야 합니다.

​

⑤ 위 제1항에 따라 인스타그램과 블로그 이외의 채널을 통해 콘텐츠를 업로드하여 캠페인에 참여하는 경우 캠페인에 명시되어 있는 내용을 따라야 합니다.

​

⑥ 캠페인에 선정된 체험단이 콘텐츠를 작성하지 않거나 등록하지 않는 경우 광고주로부터 받은 제품, 서비스 등의 정상 판매비용에 대한 포인트 지급이 되지 않습니다. 또한 체험단에게 이미 지급한 포인트가 있는 경우에는 체험단은 그 포인트를 회사에 반환해야 합니다.

​

⑦ 체험단이 캠페인에 선정되어 광고주로부터 받은 제품, 서비스 등은 어떠한 경우에도 재판매를 할 수 없습니다. 재판매를 할 경우 체험단은 받은 제품, 서비스 등의 정상 판매비용을 광고주에게 즉시 반환해야 하고 추가적인 서비스 패널티를 받습니다. 재판매 하는 경우, 제10조 제1항 제10호, 제7조 제2항 제4호에 의해 회사 방침을 위반한 경우에 해당하여 회사는 해당 체험단의 회원자격을 제한 또는 정지시킬 수 있고 재판매로 인해 발상한 모든 손해에 대해 회사는 책임을지지 않습니다.

​

⑧ 동조 제1~4항을 따르지 않을 경우 체험단이 받은 제품, 서비스 등을 받은 상태와 같은 상태로 광고주에게 반환하여야 하며, 받은 상태와 다르거나 반환할 수 없으면 받은 제품, 서비스 등의 정상 판매비용을 광고주에게 즉시 지급해야 합니다.

​

⑨ 광고주는 체험단과의 매칭이 완료된 이후에 해당 캠페인을 취소할 수 없습니다. 취소할 경우 제공하기로 한 제품, 서비스 등의 정상 판매비용을 체험단에게 즉시 지급해야 하며, 회사와의 계약금액도 환불이 불가합니다.

​

⑩ 동일한 제품 또는 서비스를 1명이 2개 이상의 계정을 통해 2개 이상 받을 수 없습니다. 2개 이상을 받았을 경우 회원에게 제공된 포인트와 제품 또는 서비스는 모두 회수되며 제 14조에 의한 패널티를 받습니다.

​

​

제14조 (패널티)

① 캠페인 선정 후 정해진 등록 캠페인 선정 후 정해진 등록 기간 내에 콘텐츠를 등록하지 않으면 패널티 처리되어 이후 캠페인 선정 시 불이익을 받게 됩니다.

​

② 콘텐츠 등록 기간을 지켜 주실 수 있는 체험단만 캠페인에 신청해야 합니다.

​

③ 패널티의 처리 기준

1. 등록 기간 내에 미션을 수행하지 않는 경우

​

2. 캠페인에 안내된 미션 설명, 구매 방법, 주의사항, 캠페인 지원시 안내사항, 미션 가이드라인을 지키지 않는 경우

​

3. 모든 미션을 완료 후 포인트를 받은 뒤 수행한 미션을 취소, 삭제, 비공개 등의 사유로 확인할 수 없는 경우

​

4. 미션은 수행했지만 사이트 내에서 해당 캠페인의 미션수행카드에서 인증을 하지 않는 경우

​

5. 캠페인 지원 후 1시간 내 구매 인증을 하지 않는 경우

​

6. 콘텐츠는 등록했지만 사이트 내에 미션수행카드 인증을 하지 않은 경우

​

④ 패널티의 내용

1. 해당 캠페인에 등록된 포인트가 지급되지 않습니다. 이미 지급된 경우, 획득한 제품, 서비스, 포인트 등은 환수됩니다. 환수할 수 없는 경우 동일한 금액을 회사에 납부하셔야 합니다.

​

2. 이후 캠페인 선정 시 패널티 부과 횟수와 사유는 광고주에게 공개되어 불이익을 받게 됩니다.

​

3. 반복적이고 심각하다고 판단되는 패널티는 이용약관 제10조 제1항 제5호의 회사의 업무를 방해하는 행위로 보아 회원자격의 제한 또는 정지, 회사와 회원간의 서비스 이용계약 해제(또는 해지), 기타 구체적 손해가 발생한 경우에 있어 손해배상책임을 추궁할 수 있습니다.

​

⑤ 패널티의 예외사항

1. 댕댕뷰 또는 광고주의 귀책사유인 경우

​

2. 상(喪), 질병, 교통사고, 천재지변 또는 이에 따르는 불가항력 등에 의해 노쇼가 발생하여 이를 회사에 알리고 예외임을 인정받은 경우

​

​

제15조 (포인트의 관리)

① “포인트”란 가상의 화폐를 말하는데 체험단이 광고주가 등록한 캠페인을 진행해 받게 됩니다.

​

② 회원은 회사가 정한 정책과 절차에 따라 포인트를 현금으로 환급 요청할 수 있으며, 환급 시 1포인트는 1원으로 환급됩니다.

​

③ 회원은 현금성 포인트를 현금으로 환급 시 아래 각호의 세금 및 제반 수수료를 환급 요청 금액에서 차감합니다.

1. 원천징수대상 사업소득 3.3%

​

2. 회원의 귀책사유로 인한 제반 비용은 회원의 부담을 원칙으로 합니다.

​

④ 포인트의 환급은 5천원 이상 금액부터 환급이 가능하며 회사가 지정하는 시간동안 1일 1회 환급을 요청할 수 있습니다.

​

⑤ 포인트는 받은 날로부터 2년간 사용하지 않거나 출금하지 않으면 소멸합니다.

​

⑥ 포인트는 회원의 서비스 탈퇴 및 이용계약 해지 시 소멸하며 양도 및 상속 등 어떠한 처분행위도 불가능합니다.

​

⑦ 기타 회원의 실수로 인하여 발생되는 제반 비용은 회원부담을 원칙으로 합니다.

​

​

제16조 (콘텐츠의 저작권 및 관리)

① 회원이 댕댕뷰 및 관련 사이트 내에 광고주의 상품과 관련된 문장, 이미지, 동영상 등을 게시한 콘텐츠의 저작권은 저작권법에 의해 보호를 받으며, 회사가 작성한 저작물에 대한 저작권과 기타 지식재산권은 회사에 귀속합니다.

​

② 회원은 자신이 서비스 내에 게시한 콘텐츠와 캠페인에 선정되어 작성한 콘텐츠를 회사가 국내ㆍ외에서 다음의 목적으로 사용하는 것을 허락합니다. 단, 광고주의 경우 광고주가 진행했던 캠페인에 한해서만 다음의 목적으로 사용하는 것을 허락합니다.

1. 콘텐츠의 크기를 변환하거나 단순화하는 등의 방식으로 수정하는 것

​

2. 회사와 광고주에서 운영하는 다른 사이트에 콘텐츠를 복제, 전송, 전시하는 것

​

3. 회사와 광고주의 제품 또는 서비스를 홍보하기 위한 목적으로 미디어, 통신사 등에게 콘텐츠의 내용을 보도, 방영하게 하는 것

​

③ 전항의 규정에도 불구하고, 다음의 경우에는 회원에게 사전에 동의를 구해야 합니다.

1. 회원의 개인정보나 신상정보가 포함된 경우

​

2. 회원과 광고주 또는 회사가 사전에 동의를 구하고 사용한다고 합의한 경우

​

④ 회원이 서비스에 콘텐츠를 게시하는 것은 다른 회원이 콘텐츠를 서비스 내에서 사용하거나 회사가 검색결과로 사용하는 것을 허락한 것으로 봅니다.

​

⑤ 회원이 이용계약을 해지하거나 해지되는 경우에도 회원이 서비스에 게시한 콘텐츠는 존속됩니다. 다만, 회원이 게시중단 및 삭제 등을 요청한 경우 회사는 「정보통신망법」에 따라 조처를 하여야 합니다.

​

⑥ 회사는 서비스 운영 정책상 또는 회사가 운영하는 사이트 간의 통합 등을 하는 경우 콘텐츠의 내용을 변경하지 아니하고 콘텐츠의 게재 위치를 변경ㆍ이전 또는 공유로 서비스할 수 있으며, 게시물의 변경ㆍ이전 또는 공유를 하는 경우에는 사전에 공지합니다.

​

⑦ 회원의 콘텐츠가 「정보통신망법」 및 「저작권법」 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련법에 따라 조처를 하여야 합니다.

​

⑧ 회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 콘텐츠에 대해 임시조치 등을 취할 수 있습니다.

​

​

제17조 (권리의 귀속)

① 서비스에 대한 저작권 및 지식재산권은 회사에 귀속됩니다. 단, 회원의 콘텐츠 및 제휴계약에 따라 제공된 저작물 등은 제외합니다.

​

② 회사가 제공하는 서비스의 디자인, 회사가 만든 텍스트, 그래픽 등 회사가 제공하는 서비스에 관련된 지식재산권은 대한민국 및 외국의 법령을 근거로 하여 회사가 보유하고 있거나 회사에 소유권 또는 사용권이 있습니다.

​

③ 회원은 본 이용약관으로 인하여 서비스를 소유하거나 서비스에 관한 저작권을 보유하게 되는 것이 아니라, 회사로부터 서비스의 이용을 허락 받게 되는바, 서비스는 정보 취득 또는 개인용도로만 제공되는 형태로 회원이 이용할 수 있을 뿐 가공하여 재사용하는 등 영리적 목적으로 이용할 수 없습니다.

​

④ 회원은 명시적으로 허락된 내용을 제외하고는 서비스를 통해 얻어지는 회원 상태정보를 영리 목적으로 사용, 복사, 유통하는 것을 포함하여 회사가 만든 텍스트, 그래픽 등의 회원 상호 간 전송기능 등을 복사하거나 유통할 수 없습니다.

​

⑤ 회사는 서비스와 관련하여 회원에게 회사가 정한 이용조건에 따라 아이디, 콘텐츠 등을 이용할 수 있는 이용권만을 부여하며, 회원은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.

​

​

제18조 (계약해제, 해지 등)

① 회원은 언제든지 서비스 내 "탈퇴하기" 화면을 통하여 이용계약 해지 신청을 할 수 있으며, 회사는 관련법 등이 정하는 바에 따라 이를 즉시 처리하여야 합니다.

​

② 회원이 계약을 해지할 경우, 관련법 및 개인정보 처리방침에 따라 회사가 회원 정보를 보유하는 경우를 제외하고는 해지 즉시 회원의 모든 데이터는 소멸합니다.

​

③ 회원이 제10조 또는 제11조의 의무를 위반한 경우에는 당사자 중 일방은 서비스 계약을 해제(또는 해지)할 수 있고, 그 방법은 민법의 규정을 준용합니다.

​

​

제19조 (이용제한 등)

① 회사는 회원이 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시 정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.

​

② 회사는 전항에도 불구하고, 회원 정보의 허위내용 기재, 전화번호 도용, 저작권법 및 컴퓨터프로그램 보호법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법 통신 및 해킹, 악성 프로그램의 배포, 접속 권한 초과 행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다. 본 항에 따른 영구 이용정지 시 서비스 이용을 통해 획득한 혜택 등도 모두 소멸하며, 회사는 이에 대해 별도로 보상하지 않습니다.

​

③ 회사는 회원이 계속해서 3개월 이상 로그인하지 않는 경우, 회원 정보의 보호 및 운영의 효율성을 위해 이용을 제한할 수 있습니다.

​

④ 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은 회사의 이용제한정책에서 정하는 바에 의합니다.

​

⑤ 본 조에 따라 서비스 이용을 제한하거나 계약을 해지하는 경우에는 회사는 서비스 메시지, 이메일 등의 방법으로 통지합니다.

​

⑥ 회원은 본 조에 따른 이용제한 등에 대해 회사가 정한 절차에 따라 이의신청을 할 수 있습니다. 이때 이의가 정당하다고 회사가 인정하는 경우 회사는 즉시 회원이 서비스를 이용할 수 있도록 합니다.

​

​

제20조 (책임제한)

① 회사는 천재지변 또는 이에 따르는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.

​

② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.

​

③ 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.

​

④ 회사는 회원 간 또는 회원과 제3자 상호 간에 서비스를 매개로 하여 거래 등을 한 경우에는 해당 거래에 대한 책임이 면제됩니다.

​

⑤ 회사는 무료로 제공되는 서비스 이용과 관련하여 관련법에 특별한 규정이 없거나 회사의 고의 또는 중과실로 발생한 손해가 아닌 한 책임을 지지 않습니다.

​

⑥ 회사는 제3자가 서비스 내 화면 또는 링크된 웹사이트를 통하여 광고한 제품 또는 서비스의 내용과 품질에 대하여 감시할 의무 기타 어떠한 책임도 지지 아니합니다.

​

⑦ 회사는 회원이 서비스를 이용하여 기대하는 효용을 얻지 못한 것에 대하여 책임을 지지 않으며 서비스에 대한 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.

​

⑧ 회사 및 회사의 임직원 그리고 대리인은 다음의 상황에서 발생하는 손해에 대한 책임을 지지 아니합니다.

1. 회원 상태정보의 허위 또는 부정확성에 기인하는 손해

​

2. 그 성질과 경위를 불문하고 서비스에 대한 접속 및 서비스의 이용과정에서 발생하는 개인적인 손해

​

3. 서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인 이용으로부터 발생하는 손해

​

4. 서버에 대한 전송 또는 서버로부터의 전송에 대한 제3자의 모든 불법적인 방해 또는 중단행위로부터 발생하는 손해

​

5. 제3자가 서비스를 이용하여 불법적으로 전송, 유포하거나 전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성 프로그램으로 인한 손해

​

6. 전송된 데이터의 오류 및 생략, 누락, 파괴 등으로 발생하는 손해

​

7. 회원 간의 회원 상태정보 등록 및 서비스 이용 과정에서 발생하는 명예훼손 등의 기타 불법행위로 인한 각종 민형사상 책임

​

​

제21조 (준거법 및 재판관할)

① 회사와 회원 간 제기된 소송은 대한민국 법을 준거법으로 합니다.

​

② 회사와 회원 간 발생한 분쟁에 관한 소송은 민사소송법상의 법원을 회사 본점 소재지가 위치한 전속적 관할법원으로 합니다.
        `}
      </Text>
    </Container>
  );
}

export default Terms;