package com.example.sprinttest.service;

import com.example.sprinttest.domain.Member;
import com.example.sprinttest.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
public class MemberServiceIntegrationTest {
  @Autowired
  MemberService memberService;
  @Autowired
  MemberRepository memberRepository;

  @Test
  void join() {
    //given
    Member member = new Member();
    member.setName("spring");
    //when
    Long memberId = memberService.join(member);
    //then
    Member result = memberService.findOne(memberId).get();
    assertThat(member.getName()).isEqualTo(result.getName());
  }

  @Test
  void duplicationJoin() {
    //given
    Member member1 = new Member();
    member1.setName("spring");
    Member member2 = new Member();
    member2.setName("spring");
    //when
    memberService.join(member1);
    IllegalStateException e = assertThrows(IllegalStateException.class, () -> memberService.join(member2));
    //then
    assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
  }

  @Test
  void findMembers() {
  }

  @Test
  void findOne() {
  }
}
