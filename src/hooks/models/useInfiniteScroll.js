import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import useEventListener from "../generic/useEventListener";
import { sortByDateAsc } from "../../utils";

function useInfiniteScroll(ref, limit = 25, modifier = 10) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const stories = useSelector(state => state.stories.stories);
  const [isLoading, setIsLoading] = useState(false);
  const [dataToSend, setDataToSend] = useState([]);
  const startIndex = useMemo(() => (page - 1) * limit, [page, limit]);
  const endIndex = useMemo(() => page * limit, [page, limit]);
  const handleInfiniteScroll = () => {
    const newStories = Array.from(stories).sort(sortByDateAsc);
    const dataToSend = newStories.slice(startIndex, endIndex)
    setIsLoading(() => true);
    setDataToSend(() => dataToSend);
    setPage(() => page + 1);
    setHasMore(() => newStories.slice(startIndex, endIndex).length >= limit);
    setIsLoading(() => false);
  }
  useEffect(() => {
    handleInfiniteScroll();
    // eslint-disable-next-line
  }, [])
  useEventListener("scroll", (_) => {
    const elementHeight = ref.current.scrollHeight;
    const currentScroll = ref.current.scrollTop + window.innerHeight;
    const isScrolledToBottom = currentScroll + modifier > elementHeight;
    if (hasMore && isScrolledToBottom) handleInfiniteScroll();
  }, ref.current);
  return { page, hasMore, isLoading, dataToSend };
}

export default useInfiniteScroll;