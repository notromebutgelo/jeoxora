"use client";

import { create } from "zustand";
import type { ReviewerSummary } from "@/types/reviewer";

type ReviewerState = {
  reviewers: ReviewerSummary[];
  searchQuery: string;
  selectedReviewerId?: string;
  setReviewers: (reviewers: ReviewerSummary[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedReviewerId: (reviewerId?: string) => void;
};

export const useReviewerStore = create<ReviewerState>((set) => ({
  reviewers: [],
  searchQuery: "",
  selectedReviewerId: undefined,
  setReviewers: (reviewers) => {
    set({ reviewers });
  },
  setSearchQuery: (searchQuery) => {
    set({ searchQuery });
  },
  setSelectedReviewerId: (selectedReviewerId) => {
    set({ selectedReviewerId });
  },
}));
