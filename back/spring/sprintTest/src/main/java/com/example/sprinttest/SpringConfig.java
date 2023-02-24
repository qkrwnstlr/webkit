package com.example.sprinttest;

import com.example.sprinttest.repository.MemberRepository;
import com.example.sprinttest.repository.MemoryMemberRepository;
import com.example.sprinttest.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig  {
  @Bean
  public MemberService memberService() {
    return new MemberService(memberRepository()); // 싱글톤이라 한번 만들면 같은 객체임을 보장
  }
  @Bean
  public MemberRepository memberRepository() {
    return new MemoryMemberRepository();
  }
}
