package com.example.sprinttest.repository;

import com.example.sprinttest.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {
  @Override
  Optional<Member> findByName(String name);
}
