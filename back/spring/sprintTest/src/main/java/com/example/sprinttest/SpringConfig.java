package com.example.sprinttest;

import com.example.sprinttest.repository.MemberRepository;
import com.example.sprinttest.repository.MysqlJpaMemberRepository;
import com.example.sprinttest.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManager;

@Configuration
public class SpringConfig {
  /*  private EntityManager em;

    @Autowired
    public SpringConfig(EntityManager em) {
      this.em = em;
    }*/
  private final MemberRepository memberRepository;

  @Autowired
  public SpringConfig(MemberRepository memberRepository) {
    this.memberRepository = memberRepository;
  }

  @Bean
  public MemberService memberService() {
    return new MemberService(memberRepository);
    //return new MemberService(memberRepository()); // 싱글톤이라 한번 만들면 같은 객체임을 보장
  }

/*  @Bean
  public MemberRepository memberRepository() {
    //return new MemoryMemberRepository();
    //return new MysqlJpaMemberRepository(em);
  }*/
}
