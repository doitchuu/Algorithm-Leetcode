// nums = [1, 2, 3];

function permute(nums: number[]): number[][] {
    const answer = [];
    const isUsed = new Array(nums.length).fill(false);

    // 정답을 만드는 함수
    const recursion = (isUsed, currentList) => { // [t, t, t], [1, 2, 3]
        if (currentList.length === nums.length) {
            answer.push(currentList);

            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const currentValue = nums[i];

            if (isUsed[i]) {
                continue;
            }

            isUsed[i] = true;

            recursion(isUsed, [...currentList, currentValue]);

            isUsed[i] = false;
        }
    };

    recursion(isUsed, []);

    return answer;
};

// [1, 2, 3, 4]

// 1. 현재 자릿수에 어떤걸 넣을 수 있는가?
// 2. 썼던 수는 못쓴다

// 1. 첫번째 자릿수에 어떤 수를 넣을까
// 2. [1, 2, 3]중에 안쓴 수가 뭐가 있을까
// 3. 1을 안썼네 1을 넣자.

// 4. 두번째 자릿수에 어떤 수를 넣을까
// 5. [1, 2, 3]중에 안쓴 수가 뭐가 있을까
// 6. 2를 안썼네 2를 넣자

// 7. 세번째 자릿수에 어떤 수를 넣을까
// 8. [1, 2, 3]중에 안쓴 수가 뭐가 있을까
// 9. 3를 안썼네 3를 넣자

// 7. 네번째 자릿수에 어떤 수를 넣을까
// 8. [1, 2, 3]중에 안쓴 수가 뭐가 있을까
// 9. 3를 안썼네 3를 넣자


// // 현재 자릿수에 넣을 수 있는 수 판단 -> isUsed
// // 자릿수에 넣고, 다음 자릿수로 이동